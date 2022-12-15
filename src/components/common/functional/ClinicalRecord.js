import React from 'react';

export function ClinicalRecord({
    id,
    component_name,
    component_value,
    measured_date_time,
}){
    return (
        <tr>
            <td>{component_name}</td>
            <td>{component_value}</td>
            <td>{measured_date_time}</td>
        </tr>
    );
};

