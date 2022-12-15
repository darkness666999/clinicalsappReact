import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalContext} from '../../context'
import {
    Navbar,
    PageLayout,
    StyledNavLinkBtnPrimary,
    StyledInput,
    StyledForm,
    StyledButton,
} from '../common/CommonIndex';

const AddPatient  = ()=>{
    const { setPatient } = useGlobalContext();

    const data={
            first_name:'',
            last_name:'',
            age:0
        }

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        setPatient(data)                
    }

    return (
        <>
            <Navbar />
            <PageLayout>
                <div>
                    <h2>Create Patient:</h2>
                    <StyledForm>
                        <StyledInput
                            placeholder="Fist Name"
                            type="text"
                            name="firstName"
                            onChange={(event) => {
                                data.first_name = event.target.value;
                            }}
                        />
                        <StyledInput
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            onChange={(event) => {
                                data.last_name = event.target.value;
                            }}
                        />
                        <StyledInput
                            placeholder="Age"
                            type="text"
                            name="age"
                            onChange={(event) => {
                                data.age = event.target.value;
                            }}
                        />
                        <StyledButton onClick={handleSubmit}>
                            Confirm
                        </StyledButton>
                    </StyledForm>
                    <ToastContainer />
                    <StyledNavLinkBtnPrimary to={'/'}>
                        Go Back
                    </StyledNavLinkBtnPrimary>
                </div>
            </PageLayout>
        </>
    );

}

export default AddPatient;