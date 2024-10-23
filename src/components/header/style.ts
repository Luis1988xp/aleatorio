// import styled from 'styled-components';


// export const Container = styled.div`
//     background-color: red;
//     height: 100px;
   
// `;

// export const ListItem = styled.li`
    
//     list-style:none;
//     color: ${(props) => (props.active ? '#fff' : '#000')};
// `;








import styled from 'styled-components';

export const Container = styled.div`
    background-color: red;
    height: 100px;
    display: flex;
    align-items: center; /* Center items vertically */
    padding: 0 20px; /* Add some horizontal padding */
`;

export const ListItem = styled.li<{active:boolean}>`
    list-style: none;
    color: ${(props) => props.active? '#fff' : '#000'};
    margin: 0 15px; /* Add spacing between list items */
    cursor: pointer; /* Change cursor to pointer on hover */
    
    &:hover {
        color: #fff; /* Change color on hover */
    }
`;






