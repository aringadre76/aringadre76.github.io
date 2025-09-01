#!/usr/bin/env python3
"""
Script to parse project files from job-apps/projects folder
and generate project data for the portfolio website.
"""
import os
import json
import re
from pathlib import Path

def parse_project_file(filepath):
    """Parse a single project file and extract relevant information."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.strip().split('\n')

    # Extract title from first line
    title = lines[0].strip()
    if title.startswith('# '):
        title = title[3:].strip()
    elif title.startswith('#'):
        title = title[1:].strip()

    # Clean up title - remove leading/trailing special characters
    title = re.sub(r'^[^a-zA-Z0-9]+', '', title)
    title = re.sub(r'[^a-zA-Z0-9]+$', '', title)

    # Fix specific known issues with titles
    title_fixes = {
        'ab 6: Dino Game on Basys3': 'Dino Game on Basys3',
        'ananaSlug Emulator': 'BananaSlug Emulator',
        'aseball Stats MCP Server': 'Baseball Stats MCP Server',
        'cholarly Research MCP Server': 'Scholarly Research MCP Server',
        'istributed Task Queue System - Project Specification': 'Distributed Task Queue System',
        'ntermediate Representation Compiler': 'Intermediate Representation Compiler',
        'penBiomechanics Baseball Injury Risk Assessment System': 'OpenBiomechanics Baseball Injury Risk Assessment System'
    }

    if title in title_fixes:
        title = title_fixes[title]

    # Extract description from second line or first paragraph
    description = ""
    tech_stack = []

    for line in lines[1:]:
        line = line.strip()
        if line and not line.startswith('#') and not line.startswith('```'):
            # Look for description
            if not description and len(line) > 20:
                description = line
                break

    # Look for tech stack information
    tech_patterns = [
        r'Tech Stack[:\s]*(.*)',
        r'Technologies[:\s]*(.*)',
        r'Built with[:\s]*(.*)',
        r'Stack[:\s]*(.*)',
        r'Prerequisites[:\s]*(.*)',
        r'Features[:\s]*(.*)',
    ]

    for pattern in tech_patterns:
        match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
        if match:
            tech_line = match.group(1).strip()
            # Split by common delimiters
            tech_items = re.split(r'[,&\n]', tech_line)
            tech_stack = [item.strip() for item in tech_items if item.strip() and len(item.strip()) > 1]
            break

    # Special handling for specific projects
    if 'dino' in title.lower() or 'basys3' in title.lower():
        tech_stack = ['FPGA', 'Verilog', 'SystemVerilog', 'Python']
    elif 'emulator' in title.lower():
        tech_stack = ['C++', 'SDL2', 'RISC', 'CPU']
    elif 'intermediate representation' in title.lower():
        tech_stack = ['Python', 'Compiler', 'IR']
    elif 'biomechanics' in title.lower():
        tech_stack = ['Python', 'Machine Learning', 'AI']

    # If no tech stack found, try to extract from features or other sections
    if not tech_stack:
        # Look for common tech mentions
        tech_keywords = [
            'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'MongoDB',
            'Express', 'OpenAI', 'WebGL', 'Three.js', 'Docker', 'AWS', 'API',
            'REST', 'GraphQL', 'PostgreSQL', 'Redis', 'TensorFlow', 'PyTorch',
            'Machine Learning', 'AI', 'LLM', 'FPGA', 'Verilog', 'SystemVerilog',
            'Django', 'C++', 'SDL2', 'WebSockets', 'RISC', 'CPU', 'GPU'
        ]

        found_tech = []
        content_lower = content.lower()
        for tech in tech_keywords:
            if tech.lower() in content_lower:
                found_tech.append(tech)

        tech_stack = found_tech[:6]  # Limit to 6 technologies

    # Clean up tech stack entries
    cleaned_tech = []
    for tech in tech_stack:
        tech = tech.strip()
        # Remove version numbers and extra info
        tech = re.sub(r'\s*\([^)]*\)', '', tech)  # Remove parentheses
        tech = re.sub(r'\s*\[.*\]', '', tech)     # Remove brackets
        tech = re.sub(r'\s*\d.*', '', tech)       # Remove version numbers
        tech = re.sub(r'\s*\+.*', '', tech)       # Remove + signs
        tech = re.sub(r'\s*-.*', '', tech)        # Remove dashes
        if tech and len(tech) > 1:
            cleaned_tech.append(tech)

    tech_stack = cleaned_tech

    return {
        'title': title,
        'description': description,
        'tech': ', '.join(tech_stack[:4]) if tech_stack else 'Various Technologies'
    }

def main():
    projects_dir = Path('/home/robot/arin-gadre/job-apps/projects')
    projects = []

    if not projects_dir.exists():
        print(f"Projects directory not found: {projects_dir}")
        return

    # Get all .txt files
    txt_files = list(projects_dir.glob('*.txt'))

    for txt_file in txt_files:
        try:
            project = parse_project_file(txt_file)
            projects.append(project)
            print(f"Parsed: {project['title']}")
        except Exception as e:
            print(f"Error parsing {txt_file}: {e}")

    # Sort projects by title
    projects.sort(key=lambda x: x['title'])

    # Save to JSON file
    output_file = Path('/home/robot/arin-gadre/aringadre76.github.io/src/projects.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(projects, f, indent=2, ensure_ascii=False)

    print(f"\nParsed {len(projects)} projects and saved to {output_file}")

if __name__ == '__main__':
    main()
