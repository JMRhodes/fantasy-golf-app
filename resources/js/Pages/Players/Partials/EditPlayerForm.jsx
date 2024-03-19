import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {router, useForm, usePage} from '@inertiajs/react';
import {useState} from "react";

export default function EditPlayerForm({className = ''}) {
    const {player} = usePage().props;
    const {data, setData, errors, put, reset, processing, recentlySuccessful} = useForm({
        first_name: player.first_name,
        last_name: player.last_name,
        salary: player.salary,
    });

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

        put(route('players.update', player.id), data);
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
                                       value={data.first_name}
                                       onChange={(e) => setData('first_name', e.target.value)}
                                       required
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
                                       value={data.last_name}
                                       onChange={(e) => setData('last_name', e.target.value)}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="salary" className="block text-sm font-medium leading-6 text-gray-900">Salary</label>
                    <div className="mt-2">
                        <TextInput name="salary"
                                   id="salary"
                                   required
                                   value={data.salary}
                                   onChange={(e) => setData('salary', e.target.value)}
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                    <div className="mt-2 flex items-center gap-x-3">
                        <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                             aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                  clipRule="evenodd"/>
                        </svg>
                        <button type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Change
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton>Update</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
