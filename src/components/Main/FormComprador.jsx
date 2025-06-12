

const FormComprador = () => {



  return <div className="h-[600px] flex items-center justify-center w-full">
  <div className="bg-base-300 p-8 rounded-lg shadow-md w-full max-w-xl">
    <h2 className="text-2xl font-bold mb-4 text-gray-100">Formulario de Comprador</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value=""
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
          placeholder="Ingresa tu nombre"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value=""
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value=""
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
          placeholder="Número de teléfono"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value=""
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
          placeholder="Ingresa tu dirección"
          required
        />
      </div>
      <div>
        <label htmlFor="referido" className="block text-sm font-medium text-gray-200">
          Referido
        </label>
        <input
          type="text"
          id="referido"
          name="referido"
          value=""
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
          placeholder="Código de referido"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Pagar
        </button>
      </div>
    </form>
  </div>
</div>;
};

export default FormComprador;