import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Patient({ id, last_name, first_name, age, clinicalData }){
    return (
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{age}</td>
            <td width="50px" align="center">
                <NavLink to={`/patientDetails/${id}`}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                </NavLink>
            </td>
            <td width="50px" align="center">
                <NavLink to={`/analyze/${id}`}>
                    <FontAwesomeIcon icon="fa-solid fa-calculator" />
                </NavLink>
            </td>
        </tr>
    );
};

