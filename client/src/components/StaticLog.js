import React from "react";
import styled from "styled-components";

const TableStyle = styled.table`
    table, td, th {
        border: 1px solid black;
    }

    td, th {
        padding: 5px;
        text-align: center;
    }

`;

const StaticLog = (props) => {

    return (
        <div>
            <p style={{textAlign: "center"}}>{props.tableName}</p>
            <TableStyle>
                <table>
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                       {props.data.map(entry =>
                            <tr>
                                <td>{entry.food}</td>
                                <td>{entry.calories}</td>
                            </tr> )}
                    </tbody>
                </table>
            </TableStyle>
        </div>
    );
}

export default StaticLog;