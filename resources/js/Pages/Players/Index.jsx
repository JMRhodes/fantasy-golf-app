import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';

export default function Index({ auth }) {
    const { players } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex items-baseline"><h2 className="font-semibold text-xl text-gray-800 leading-tight">
                All Players
            </h2><Link className="px-4 text-xs text-zinc-500 hover:text-indigo-500" href={route('players.add')}>(add)</Link></div>}
        >
            <Head title="Players" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <ul className="block p-6">
                            {players.map(function (player) {
                                return <li className="py-3" key={player.id}>
                                    {player.first_name} {player.last_name}
                                </li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
