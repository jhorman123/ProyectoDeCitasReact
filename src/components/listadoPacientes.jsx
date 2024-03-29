import Pacientes from "./pacientes";

const listadoPacientes = ({pacientes, setPaciente, eliminarPacientes}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen ">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>      

          {pacientes.map( (pacientes) => 
            <Pacientes 
              key={pacientes.id}
              pacientes = {pacientes}
              setPaciente = {setPaciente}
              eliminarPacientes = {eliminarPacientes}
            />
            
          )}
        </>
      ) : (
        <>

          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando Pacientes {''}
            <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
          </p>
        
        </>
      )}        

    </div>
  );
};

export default listadoPacientes;
