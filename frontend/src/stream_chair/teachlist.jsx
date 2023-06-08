

// // export default Students
// // components/UsersTable.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Students = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await axios.get('/users');
//       setUsers(res.data);
//     };
//     fetchUsers();
//   }, []);

//   const handleEdit = (id) => {
//     // Handle edit button click
//   };

//   const handleDelete = (id) => {
//     // Handle delete button click
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Department</th>
//           <th>Course</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user.name}</td>
//             <td>{user.department}</td>
//             <td>{user.course}</td>
//             <td>
//               {user && (
//                 <>
//                   <button onClick={() => handleEdit(user._id)}>Edit</button>
//                   <button onClick={() => handleDelete(user._id)}>Delete</button>
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// // export default Students;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../style/editlist.css';

// const Teachers = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       const respose = await axios.get('http://localhost:5000/api/seeteacher');
//       setTeachers(respose.data);
//     };
//     fetchTeachers();
//   }, []);

//   return (
//     <>
//       <h2>This is the List of Teachers</h2>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Department</th>
//             <th>Course</th>
//           </tr>
//         </thead>
//         <tbody>
//           {console.log(teachers)}
//           {Array.isArray(teachers) && teachers.map((teacher, index) => (
//             <tr key={teacher._id}>
//               <td>{index + 1}</td>
//               <td>{teacher.name}</td>
//               <td>{teacher.email}</td>
//               <td>{teacher.departmentId && teacher.departmentId.name}</td>
//               <td>{teacher.courseId && teacher.courseId.name}</td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </>
//   );
// };

// export default Teachers;







// // // import React from 'react'

// // // const Students = () => {
// // //     return (
// // //         <div>This is List of registered Students </div>
// // //         )
// // // }

// // // export default Students

// // // components/UsersTable.js

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Students = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       const res = await axios.get('/users');
// //       setUsers(res.data);
// //     };
// //     fetchUsers();
// //   }, []);

// //   const handleEdit = (id) => {
// //     // Handle edit button click
// //   };

// //   const handleDelete = (id) => {
// //     // Handle delete button click
// //   };

// //   return (
// //     <table>
// //       <thead>
// //         <tr>
// //           <th>Name</th>
// //           <th>Department</th>
// //           <th>Course</th>
// //           <th>Edit</th>
// //           <th>Delete</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {users.map((user) => (
// //           <tr key={user._id}>
// //             <td>{user.name}</td>
// //             <td>{user.department}</td>
// //             <td>{user.course}</td>
// //             <td>
// //               <button onClick={() => handleEdit(user._id)}>Edit</button>
// //             </td>
// //             <td>
// //               <button onClick={() => handleDelete(user._id)}>Delete</button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default Students
// // components/UsersTable.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Students = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await axios.get('/users');
//       setUsers(res.data);
//     };
//     fetchUsers();
//   }, []);

//   const handleEdit = (id) => {
//     // Handle edit button click
//   };

//   const handleDelete = (id) => {
//     // Handle delete button click
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Department</th>
//           <th>Course</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user.name}</td>
//             <td>{user.department}</td>
//             <td>{user.course}</td>
//             <td>
//               {user && (
//                 <>
//                   <button onClick={() => handleEdit(user._id)}>Edit</button>
//                   <button onClick={() => handleDelete(user._id)}>Delete</button>
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Students;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/editlist.css'
const Students = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [userIndex, setUserIndex] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/seeteacher');
      setUsers(res.data.map(user => ({ ...user, active: false })));
    };
    fetchUsers();
  }, []);

  const handleEdit = (id) => {
    console.log(`Editing user with id ${id}`);
    const user = users.find((user) => user._id === id);
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setCourse(user.course);

    setDepartment(user.department);
    setShowModal(true);
  };
  const handleDelete = async (id) => {
    console.log(`Deleting user with id ${id}`);
    if (window.confirm('Are you sure you want to delete the user?')) {
      try {
        await axios.delete(`/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (err) {
        console.log(err);
      }
    };
  }

  const handleSave = async () => {
    // Handle save button click
    console.log(`Saving user with id ${editingUser.id}`);
    try {
      await axios.put(`/users/${editingUser.id}`, {
        name,
        email,
        department,
      });
      setUsers(
        users.map((user) =>
          user._id === editingUser.id ? { ...user, name, email, department } : user
        )
      );
      setShowModal(false);
      setEditingUser(null);
      setName('');
      setEmail('');
      setCourse('');
      setDepartment('');
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      course: course,
      department: department,
      active: false,
    };
    setUsers([...users, newUser]);
    setUserIndex(userIndex + 1);
    setName('');
    setEmail('');
    setDepartment('');
  };
  // const handleToggle = (user) => {
  //   setUsers(
  //     users.map((u) =>
  //       u._id === user._id ? { ...u, active: !u.active } : u
  //     )
  //   );
  // // };
  // const handleToggle = (user) => {
  //   const index = users.findIndex((u) => u._id === user._id);
  //   if (index !== -1) {
  //     const updatedUsers = [...users];
  //     updatedUsers[index] = { ...updatedUsers[index],: !updatedUsers[index].active };
  //     setUsers(updatedUsers);
  //   }
  // };
  // const handleToggle = (user) => {
  //   const index = users.findIndex((u) => u._id === user._id);
  //   if (index !== -1) {
  //     const updatedUsers = [...users];
  //     updatedUsers[index] = { ...updatedUsers[index], active: !updatedUsers[index].active };
  //     setUsers(updatedUsers);
  //   }
  // };

  return (
    <>
      <h2>This is the List of Teachers</h2>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>{user.course}</td>

              <td>{user.department}</td>
              <td>
                {user && (
                  <>
                    <button onClick={() => handleEdit(user._id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                    <button onClick={() => handleDelete(user._id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                    {/* <button onClick={() => handleToggle(user)}>
                {user.active ? (
                  <i className="fas fa-toggle-on"></i>
                ) : (
                  <i className="fas fa-toggle-off"></i>
                )}
              </button> */}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
          <div className="modal-background" onClick={() => setShowModal(false)}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit User</p>
              {/* <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button> */}
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label">Course</label>
                <div className="control">
                  <input className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label">Department</label>
                <div className="control">
                  <input className="input" type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </div>
              </div>

            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={handleSave}>Save changes</button>
              <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
