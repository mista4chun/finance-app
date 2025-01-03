function FormLayout({ title, description, children, close, openModal }) {
    return (
      <div className="absolute inset-0 z-40 flex h-screen items-center justify-center bg-black/40">
        <div className="max-w-sm rounded-2xl bg-gray-100 px-6 py-8 md:max-w-xl">
          <div className="flex items-center justify-between gap-3 pb-4">
            <h1 className="text-3xl font-bold">Add New {title}</h1>
            <img
              src="/icon-close-modal.svg"
              alt="Close"
              onClick={() => close(!openModal)}
            />
          </div>
          <p className="pb-4 text-sm text-gray-600">{description}</p>
  
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </div>
    );
  }
  
  export default FormLayout;
  