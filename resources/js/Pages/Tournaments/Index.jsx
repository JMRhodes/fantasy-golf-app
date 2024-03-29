import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';

export default function Index({auth}) {
    const { tournaments } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex items-baseline"><h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Tournaments
            </h2><Link className="px-4 text-xs text-zinc-500 hover:text-indigo-500" href={route('tournaments.create')}>(create)</Link></div>}
        >
            <Head title="Tournaments"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <ul className="block p-6">
                                {tournaments.map(function (tournament) {
                                    return <li className="py-3" key={tournament.id}>
                                        {tournament.name}
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
