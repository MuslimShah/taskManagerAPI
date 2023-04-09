<h1>Task Manager API</h1>
<p>This is a task manager API created using Node.js, Express.js, and MongoDB.</p>

<h2>Getting started</h2>

<p>To get started with the application, you will need to have Node.js and MongoDB installed on your system.</p>

<ol>
  <li>First, clone the repository and navigate to the project directory.</li>
 <pre><code>git clone https://github.com/MuslimShah/taskManagerAPI.git </code></pre>
  <code> cd taskManagerAPI</code>
  <li>Then, install the necessary dependencies using npm:</li>
  <code>npm install</code>
  <li>You will also need to create a <code>.env</code> file in the project root directory and set the following environment variables:</li>
  <pre>
    <code>PORT=3000
MONGODB_URL=mongodb://localhost:27017/task-manager-api
JWT_SECRET=your_jwt_secret_key</code>
</pre>
<p>Make sure to replace <code>your_jwt_secret_key</code> with your own secret key.</p>
<li>Start the server by running:</li>
<code>npm start</code>
</ol>
<h2>API routes</h2>

<p>The following API routes are available:</p>

<ul>
  <li><code>GET /api/v1/tasks</code> - Returns a list of all tasks.</li>
  <li><code>POST /api/v1/tasks</code> - Creates a new task.</li>
  <li><code>GET /api/v1/tasks/:id</code> - Returns a single task with the specified ID.</li>
  <li><code>PATCH /api/v1/tasks/:id</code> - Updates a task with the specified ID.</li>
  <li><code>DELETE /api/v1/tasks/:id</code> - Deletes a task with the specified ID.</li>
</ul>

<h2>Example requests</h2>

<p>Here are some example requests:</p>

<h3>Creating a new task</h3>

<pre>
  <code>POST /api/v1/tasks
Request body:
{
"title": "Task title",
"description": "Task description"
}</code>
</pre>
<h3>Updating a task</h3>

<pre>
  <code>PATCH /api/v1/tasks/:id
Request body:
{
"title": "New task title"
}</code>
</pre>
<h2>Conclusion</h2>

<p>That's it! You now have a fully-functional task manager API built with Express.js. If you have any questions or issues, feel free to open an issue or pull request in the repository.</p>
