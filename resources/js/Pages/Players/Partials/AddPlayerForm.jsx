import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {router} from '@inertiajs/react';
import {useState} from "react";

export default function AddPlayerForm({className = ''}) {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        salary: "0",
        photo: ""
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        router.post('/players/store', values)
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Player Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Add a new golfer to the list of available players.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first_name"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <TextInput id="first_name"
                                       name="first_name"
                                       required
                                       onChange={handleChange}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="last_name"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <TextInput id="last_name"
                                       name="last_name"
                                       required
                                       onChange={handleChange}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="salary" className="block text-sm font-medium leading-6 text-gray-900">Salary</label>
                    <div className="mt-2">
                        <TextInput name="salary"
                                   id="salary"
                                   onChange={handleChange}
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                    <div className="mt-2 flex items-center gap-x-3">

                        {values.photo
                            ?
                            <img className="h-16 w-16 text-gray-300 rounded-full" src={values.photo} alt={values.first_name}/>
                            :
                            <img className="h-16 w-16 text-gray-300 rounded-full" src="https://api.dicebear.com/8.x/initials/svg?seed=AA" alt={values.first_name}/>
                        }
                        <div className="flex grow">
                            <TextInput name="photo"
                                       id="photo"
                                       onChange={handleChange}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton>Add</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
