export const userColumns = [
     { field: "id", headerName: "ID", width: 70 },
     {
       field: "user",
       headerName: "User",
       width: 230,
       renderCell: (params) => {
         return (
           <div className="cellWithImg">
             <img className="cellImg" src={params.row.img} alt="avatar" />
             {params.row.username}
           </div>
         );
       },
     },
     {
       field: "email",
       headerName: "Email",
       width: 230,
     },
   
     {
       field: "age",
       headerName: "Age",
       width: 100,
     },
     {
       field: "status",
       headerName: "Status",
       width: 160,
       renderCell: (params) => {
         return (
           <div className={`cellWithStatus ${params.row.status}`}>
             {params.row.status}
           </div>
         );
       },
     },
   ];
   
   //temporary data
   export const userRows = [
     {
       id: 1,
       username: "Gbadebo",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       status: "active",
       email: "Gbade@gmail.com",
       age: 35,
     },
     {
       id: 2,
       username: "Olajide Lanre",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "2lboss@gmail.com",
       status: "passive",
       age: 42,
     },
     {
       id: 3,
       username: "Olakunle",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "kaynow@gmail.com",
       status: "pending",
       age: 45,
     },
     {
       id: 4,
       username: "Onabajo",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "4baj@gmail.com",
       status: "active",
       age: 16,
     },
     {
       id: 5,
       username: "Rotimi",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "5roGui@gmail.com",
       status: "passive",
       age: 22,
     },
     {
       id: 6,
       username: "Temidayo philo",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "Woli@gmail.com",
       status: "active",
       age: 15,
     },
     {
       id: 7,
       username: "Uzor",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "7dima@gmail.com",
       status: "passive",
       age: 44,
     },
     {
       id: 8,
       username: "Victor",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "vick@gmail.com",
       status: "active",
       age: 36,
     },
     {
       id: 9,
       username: "Ronnie",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "tero7@gmail.com",
       status: "pending",
       age: 65,
     },
     {
       id: 10,
       username: "Akin",
       img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       email: "midasboom@gmail.com",
       status: "active",
       age: 65,
     },
   ];