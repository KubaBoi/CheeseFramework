import os
import json

workFlowPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "workflows", "build.yml"))

with open(workFlowPath, "w") as f:
    f.write(
"""name: Build

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:

      - name: checkout repo content
        uses: actions/checkout@v2 # checkout the repository content to github runner
        with:
            ref: main

      - name: setup python
        uses: actions/setup-python@v2
        with:
          python-version: '3.9' # install the python version needed
          
      - name: Install dependecies
        run: |
          python -m pip install --upgrade pip
          python -m pip install --upgrade twine

      - name: execute py script # execute python main
        run: python .github/setCredentials.py

      - name: Build
        run: python -m build

      - name: Upload to Pypi
        run: python -m twine upload --repository testpypi dist/* -u {} -p {}

      - name: commit files
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A
          git commit -m "automatic build for pip" -a
          
      - name: push changes
        uses: ad-m/github-push-action@v0.6.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: main 
        """
    )



