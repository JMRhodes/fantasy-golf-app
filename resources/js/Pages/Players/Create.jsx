import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import {useState} from "react";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.jsx";
import AddPlayerForm from "@/Pages/Players/Partials/AddPlayerForm.jsx";

export default function CreatePlayer({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex items-baseline"><h2
                className="font-semibold text-xl text-gray-800 leading-tight">
                Add Player
            </h2><Link className="px-4 text-xs text-zinc-500 hover:text-red-500"
                       href={route('players.index')}>(cancel)</Link></div>}
        >
            <Head title="Add Player"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <AddPlayerForm
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
);
}
