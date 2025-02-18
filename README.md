# Next.js 15 App Router Silent Failure on Empty Directory

This repository demonstrates a bug in Next.js 15's App Router where it fails silently when a directory within the `app` directory is empty.  The router does not render any fallback UI, nor does it provide any informative error messages in the console.

## To Reproduce

1. Create a new Next.js app using `create-next-app`.
2. Add an empty directory within the `app` directory (e.g., `app/empty-dir`).
3. Try to navigate to a route that maps to that directory (e.g., `/empty-dir`).

The app will likely fail without producing an error message or displaying an error page.

## Expected behavior

A clear error message or a fallback UI should indicate that the route is not found or that the directory is empty.

## Actual behavior

The app fails silently. No error messages are visible, and nothing is displayed on the page.

## Workaround

Add an empty file to the directory to avoid the issue.  This is not ideal, but it is a temporary workaround for now.  See `bugSolution.js` for this workaround.