import React from "react";


// const [userData, setUserData] = useState([
//     {
//       text: 'Quick Learning',
//       id: 0
//     },
//     {
//       text: 'Daily Prectice',
//       id: 1
//     }
//   ]);


//   const dynamicGoal = (goal) => {
//     setUserData([goal, ...userData]);
//   };


//   const deleteHandler = (id) => {
//     setUserData((previousUserData) => {
//       const updateGoals = previousUserData.filter((goal) => goal.id !== id);
//       return (updateGoals);
//     });
//   };


{/* <StyleModule inputvalue={dynamicGoal} />
<DisplayUserInput userData={userData} onDeleteGoal={deleteHandler} /> */}

const DisplayInput = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <li className='my-3 col-md-10' onClick={deleteHandler} > {props.data}</ li >
    );
}
export default DisplayInput;