import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {router} from '@inertiajs/react';
import {useState} from "react";

export default function AddTournamentForm({className = ''}) {
    const [values, setValues] = useState({
        name: "",
        started_at: "",
        ended_at: "",
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

        router.post('/tournaments/add', values)
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Tournament Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Add a new tournament with player results.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="name"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <TextInput id="name"
                                       name="name"
                                       required
                                       onChange={handleChange}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="started_at"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Start Date
                        </label>
                        <div className="mt-2">
                            <TextInput id="started_at"
                                       name="started_at"
                                       required
                                       onChange={handleChange}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="ended_at"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            End Date
                        </label>
                        <div className="mt-2">
                            <TextInput id="ended_at"
                                       name="ended_at"
                                       required
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
