import React,{useState,useContext,useEffect} from "react";
import { useCallback } from "react";
import { toast } from 'react-toastify';

const url = 'http://localhost:8080/clinicalservices/api'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [loading,setLoading] = useState(true);
    const [patients,setPatients] = useState([]);
    const [update, setUpdate] = useState(true);
    const [patient, setPatient] = useState({});
    const [clinicalData, setClinicalData] = useState({});

    const fetchPatients = useCallback(async ()=>{
        console.log("fetchPatients")
        if(update){
            setLoading(true)
            try {
                const response = await fetch(`${url}/patients`)
                const data = await response.json()

                if(data){
                    const newPatients = data.map((item) =>{
                            const{id,last_name,first_name,age,clinicalData} = item 
                            return {
                                id: id,
                                first_name: first_name,
                                last_name: last_name, 
                                age: age,
                                clinicalData: clinicalData
                            }
                        }
                    )
                    setPatients(newPatients)
                }else{
                    setPatients([])
                }
                setLoading(false)
                setUpdate(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setUpdate(false)
            }
        }
    },[update])

    const createPatient = useCallback(async ()=>{
        console.log("createPatient")
        if(Object.keys(patient).length > 0){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patient)
            };
            fetch(`${url}/patients/`, requestOptions).then((res) => {
                toast('Patient added successfully!', {
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_CENTER,
                });
                setUpdate(true);
                setPatient({});
            });
        };
    },[patient])

    const createClinicalData = useCallback(async ()=>{
        console.log("createClinicalData")
        if(Object.keys(clinicalData).length > 0){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clinicalData)
            };
            fetch(`${url}/clinicals/`, requestOptions).then((res) => {
                toast('Clinical data added successfully!', {
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_CENTER,
                });
                setUpdate(true);
                setClinicalData({});
            });
        };
    },[clinicalData])

    useEffect(()=>{
        fetchPatients()
    },[update, fetchPatients])

    useEffect(()=>{
        createPatient()
    },[patient, createPatient])

    useEffect(()=>{
        createClinicalData()
    },[clinicalData, createClinicalData])

    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,
                patient,
                setPatient,
                patients,
                setPatients,
                clinicalData,
                setClinicalData,
                update,
                setUpdate
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => { 
    return useContext(AppContext)
}

export { AppContext, AppProvider }