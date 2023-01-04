import styled from '@emotion/styled';



export const StatStyles = styled.div`
  border: 1px solid lightgray;
  background-color: #fff;
  width: 500px;

  position: relative;
  padding-top: 20px;
  margin: 50px;
  transition-duration: 250ms;

  /* .title{
      text-align: center;
  } */

.statistics {
    margin-right: auto;
    margin-left: auto;

    width: 300px;
}

.title {
  text-align: center;
      font-weight: 800;

   
}

.stat-list {
    padding: 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    list-style: none;
}

.item {
    width: 60px;
}

.label {
    display: block;
        font-weight: 500;
        padding: 10px;
}
`;
