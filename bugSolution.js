```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello World</div>
  );
}

// app/empty-dir/page.js (or any file in the empty-dir)
// Add an empty file to resolve the issue.  This is a workaround, not a solution.
export default function EmptyDirPage() {
  return null; // or any other basic component
}
```