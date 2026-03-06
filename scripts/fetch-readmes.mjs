import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, "..", "projects_for_reference");
const GITHUB_USER = "aringadre76";

async function getProjectFiles() {
  const entries = await fs.readdir(PROJECTS_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".txt"))
    .map((entry) => entry.name)
    .sort();
}

async function fetchReadme(repoName) {
  const url = `https://api.github.com/repos/${GITHUB_USER}/${encodeURIComponent(
    repoName,
  )}/readme`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "projects-for-reference-readme-fetcher",
    },
  });

  if (response.status === 404) {
    console.warn(`No README found for ${repoName} (404).`);
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch README for ${repoName}: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();

  if (!data.content) {
    console.warn(`README response for ${repoName} had no content field.`);
    return null;
  }

  const buffer = Buffer.from(data.content, data.encoding || "base64");
  return buffer.toString("utf8");
}

async function writeProjectFile(fileName, readmeText) {
  const repoName = path.basename(fileName, ".txt");
  const filePath = path.join(PROJECTS_DIR, fileName);
  const githubUrl = `https://github.com/${GITHUB_USER}/${repoName}`;

  const lines = [];

  lines.push(repoName);
  lines.push("");
  lines.push("## Links");
  lines.push(`- GitHub: ${githubUrl}`);
  lines.push("");
  lines.push("## README");
  lines.push("");

  if (readmeText && readmeText.trim().length > 0) {
    lines.push(readmeText.trimEnd());
  } else {
    lines.push("_No README found on GitHub._");
  }

  const finalContent = `${lines.join("\n")}\n`;
  await fs.writeFile(filePath, finalContent, "utf8");
}

async function main() {
  const files = await getProjectFiles();

  console.log(
    `Found ${files.length} project reference file(s) in ${PROJECTS_DIR}`,
  );

  for (const fileName of files) {
    const repoName = path.basename(fileName, ".txt");
    console.log(`\nProcessing ${repoName}...`);

    let readmeText = null;
    try {
      readmeText = await fetchReadme(repoName);
    } catch (error) {
      console.error(
        `Error fetching README for ${repoName}:`,
        error instanceof Error ? error.message : String(error),
      );
    }

    try {
      await writeProjectFile(fileName, readmeText);
      console.log(`Wrote README content into ${fileName}`);
    } catch (error) {
      console.error(
        `Error writing project file for ${repoName}:`,
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  console.log("\nDone populating project reference files.");
}

main().catch((error) => {
  console.error(
    "Unexpected error in fetch-readmes script:",
    error instanceof Error ? error.message : String(error),
  );
  process.exit(1);
});

