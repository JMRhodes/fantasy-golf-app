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
        photo: player.photo,
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

                        {data.photo
                            ?
                            <img className="h-16 w-16 text-gray-300 rounded-full" src={data.photo} alt={player.first_name}/>
                            :
                            <img className="h-16 w-16 text-gray-300 rounded-full" src="https://api.dicebear.com/8.x/initials/svg?seed=MH" alt={player.first}/>
                        }
                        <div className="flex grow">
                            <TextInput name="photo"
                                       id="photo"
                                       value={data.photo}
                                       onChange={(e) => setData('photo', e.target.value)}
                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton>Update</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
