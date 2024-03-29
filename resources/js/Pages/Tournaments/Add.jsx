import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import {useState} from "react";
import AddPlayerForm from "@/Pages/Players/Partials/AddPlayerForm.jsx";
import AddTournamentForm from "@/Pages/Tournaments/Partials/AddTournamentForm.jsx";

export default function Index({auth}) {
    const [values, setValues] = useState({
        name: "",
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
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex items-baseline"><h2
                className="font-semibold text-xl text-gray-800 leading-tight">
                Add Tournament
            </h2><Link className="px-4 text-xs text-zinc-500 hover:text-red-500"
                       href={route('tournaments.index')}>(cancel)</Link></div>}
        >
            <Head title="Add Tournament"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <AddTournamentForm
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
