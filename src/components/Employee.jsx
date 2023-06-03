import EditEmployee from "./EditEmployee"

const Employee = (props) => {
  return (
    <div className="min-w-[250px] max-w-[350px] m-2 py-8 px-8 bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
    <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto sm:mx-0 sm:shrink-0" src={props.image} alt="Woman's Face" />
    <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
              {props.name}
          </p>
          <p className="text-slate-500 font-medium">
              {props.role}
          </p>
        </div>

        {props.editEmployee}
    </div>
    </div>
  )
}

export default Employee