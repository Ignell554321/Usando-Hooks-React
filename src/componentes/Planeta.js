import { useEffect, useState } from "react";
import {data} from '../data';

export const Planeta=()=>{

    const [state, setState] = useState({
        indiceLunas:0,
    })

    const {lunas} = data;
    const {indiceLunas} = state;


    const  muestraLunas=()=>{
        setState({
            ...state,
            indiceLunas: indiceLunas === lunas.length-1 ? 0 : indiceLunas+1
        })
    }

    useEffect(() => {

            const id=setInterval(()=>{

                muestraLunas();

            },1000);
            return () => clearInterval(id);

    });

    return(
        <div>

            <p className="lead fs-2 text-primary">Total de Lunas de Jupiter: {lunas.length}</p>

            <div className="card">

                <div className="card shadow border boder-3 border-primary">

                    <div className="card-header bg-primary text-white lead fs-2">
                        <p> Luna: { lunas[indiceLunas].nombre } </p>   
                    </div>

                    <div className="card-body">

                        <img className="img-fluid" src={lunas[indiceLunas].imagen} alt='luna'/>

                    </div>

                    <div className="card-footer lead fs-2">
                        <p> Superficie: { lunas[indiceLunas].superficie } </p>
                    </div>

                </div>

               
            </div>

            <hr/>

        </div>
    )
}