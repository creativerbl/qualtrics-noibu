# qualtrics-noibu

A small JavaScript utility for working with Qualtrics data and integrating with Noibu workflows. This repository contains scripts and helpers to fetch, transform, and export Qualtrics survey data and to prepare it for downstream processing.

Features

- Fetch Qualtrics survey exports using the Qualtrics API (placeholder)
- Convert and normalize CSV/JSON survey exports
- Utilities for mapping Qualtrics question IDs to human-friendly keys
- Example scripts showing common integration patterns

Getting started

These are example instructions. Replace with real commands for your project.

Prerequisites

- Node.js 14+ or later
- npm or yarn
- Qualtrics API token (if using API features)

Installation

1. Clone the repo:

   git clone https://github.com/creativerbl/qualtrics-noibu.git
   cd qualtrics-noibu

2. Install dependencies:

   npm install
   # or
   yarn install

Configuration

Create a .env file in the project root (see .env.example if present) and add your Qualtrics API credentials:

    QUALTRICS_API_TOKEN=your_token_here
    QUALTRICS_DATA_CENTER=your_data_center

Usage

Run example scripts from the scripts/ directory:

    node scripts/fetch-survey.js --surveyId SV_XXXXX

Or run the main utility (if provided):

    node index.js --help

Development

- Make a feature branch per change
- Run tests (if any) with npm test
- Lint with npm run lint

Contributing

Contributions are welcome. Please open an issue to discuss large changes before submitting a pull request.

License

This project is licensed under the MIT License — see the LICENSE file for details.

Contact

If you have questions, open an issue or contact the maintainer (creativerbl)