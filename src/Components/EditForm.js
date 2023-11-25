export const EditForm = ({ handleUpdate, title, dueDate, description, status, setTitle, setDueDate, setDescription, setStatus }) => (
  <div style={editFormContainerStyle}>
    <h4 style={headerStyle}>Edit Task</h4>
    <form onSubmit={handleUpdate} style={formStyle}>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
      <input type="date " name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Enter DueDate" />
      <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
      <select type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status">
         <option value="">Select Status</option>
         
          <option value="Completed">Completed</option>
      </select>
      <input type="submit" value="Update" />
    </form>
  </div>
);


const headerStyle = {
  color: '#333',
};

const formStyle = {
  marginBottom: '20px',
};


const editFormContainerStyle = {
  marginTop: '20px',
  border: '1px solid #ccc',
  padding: '10px',
};