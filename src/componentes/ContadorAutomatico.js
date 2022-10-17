import { Component } from "react";

export class ContadorAutomatico extends Component{

    state={
        contadorAutomatico:0,
        pausar:false
    }

     incrementarContadorAutomatico=()=>{
        this.setState(
            {
                ...this.state,
                contadorAutomatico: !this.state.pausar ? this.state.contadorAutomatico===10?0:this.state.contadorAutomatico+1 : this.state.contadorAutomatico
            }
        )
        
    }

    pausarContadorAutomatico=()=>{
        this.setState(
            {
                ...this.state,
                pausar:true
            }
        )
    }

    reanudarContadorAutomatico=()=>{
        this.setState(
            {
                ...this.state,
                pausar:false
            }
        )
    }

    
    componentDidMount=()=>{

        this.id=setInterval(()=>{

            this.incrementarContadorAutomatico();

        }, 1000);

    }

    componentWillUnmount=()=>{

        clearInterval(this.id);

    }

    render(){
        return(
        
        <>
            <p className="lead fs-2 text-primary ">Contador Automatico: {this.state.contadorAutomatico}</p>
            <button className="btn btn-sm btn-warning" onClick={this.pausarContadorAutomatico}>Pausar</button>
            <button className="btn btn-sm btn-success" onClick={this.reanudarContadorAutomatico}>Reanudar</button>
            
        </>)
    }

}