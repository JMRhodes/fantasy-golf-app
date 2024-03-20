import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage, router} from '@inertiajs/react';

export default function Index({ auth }) {
    const { players } = usePage().props;

    function handleDelete(e, id) {
        e.preventDefault();

        router.delete(route('players.update', id), {preserveScroll: true})
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex items-baseline"><h2 className="font-semibold text-xl text-gray-800 leading-tight">
                All Players
            </h2><Link className="px-4 text-xs text-zinc-500 hover:text-indigo-500" href={route('players.create')}>(create)</Link></div>}
        >
            <Head title="Players" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="px-2 py-2"></th>
                                                <th scope="col" className="px-2 py-2">Name</th>
                                                <th scope="col" className="px-2 py-2">Salary</th>
                                                <th scope="col" className="px-2 py-2">ID</th>
                                                <th scope="col" className="px-2 py-2 text-right">(?)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {players.map(function (player) {
                                                    return <tr className="border-b dark:border-neutral-500"
                                                               key={player.id}>
                                                        <td className="whitespace-nowrap px-2 py-2 font-medium">
                                                            <img
                                                                className="h-10 w-10 bg-gray-50 text-gray-300 rounded-full"
                                                                src={player.photo} alt={player.full_name}/>
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-2 font-bold">{player.full_name}</td>
                                                        <td className="whitespace-nowrap px-2 py-2">{player.salary}</td>
                                                        <td className="whitespace-nowrap px-2 py-2 font-medium">{player.id}</td>
                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                            <Link
                                                                className="pl-2 text-xs text-zinc-500 hover:text-indigo-500"
                                                                href={route('players.edit', player.id)}>(edit)</Link>
                                                            {/*<Link className="pl-2 text-xs text-zinc-500 hover:text-red-500"*/}
                                                            {/*      href={route('players.destroy', player.id)}*/}
                                                            {/*      method="delete" as="button">(delete)</Link>*/}
                                                        </td>
                                                    </tr>;
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
