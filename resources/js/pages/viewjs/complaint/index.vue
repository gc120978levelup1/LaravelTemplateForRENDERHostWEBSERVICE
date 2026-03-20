<script setup lang="ts">

import { Head, Link, useForm, /* usePage */ } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';

import {
    index as index_complaint,
    show as show_complaint,
    edit as edit_complaint,
} from '@/routes/complaint';

import type { BreadcrumbItem, /* SharedData,  User */ } from '@/types';
import SettingsLayout from './Layout.vue';


interface Props {
    complaints: { type: Array, },
    accountnumber: string,
}

const props = defineProps<Props>();

const headTitle = "Complaint Master List";
const description = "Master lisr of customer complaint.";
const breadcrumbs: BreadcrumbItem[] = [{
    title: 'Complaint Index',
    href: '/complaint',
},];

//const page = usePage<SharedData>();
//const user = page.props.auth.user as User;

const form = useForm({
    'accountnumber': props.accountnumber,
});

const submit = () => {
    form.get(index_complaint().url, {
        preserveScroll: true,
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head v-bind:title="headTitle" />
        <SettingsLayout>
            <div class="flex flex-col space-y-6">
                <Heading v-bind:title="headTitle" v-bind:description="description" />
                <form @submit.prevent="submit" class="space-y-6">

                    <div class="grid gap-2">
                        <Label for="accountnumber">Account Number</Label>
                        <Input id="accountnumber" class="mt-1 block w-full" v-model="form.accountnumber" required
                            autocomplete="accountnumber" placeholder="accountnumber" />
                        <InputError class="mt-2" :message="form.errors.accountnumber" />
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="ml-auto my-auto">
                            <Button :disabled="form.processing">
                                Search
                            </Button>
                            <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                                <p v-show="form.recentlySuccessful" class="text-sm text-neutral-600">Saved.</p>
                            </Transition>
                        </div>
                    </div>
                </form>

                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <div class="overflow-auto p-2 border rounded">
                        <table class="min-w-full text-left text-sm font-dark text-surface dark:text-white">
                            <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                                <tr>
                                    <th scope="col" class="px-1 py-4">
                                        Action
                                    </th>
                                    <th scope="col" class="px-3 py-4">
                                        #
                                    </th>
                                    <th scope="col" class="px-3 py-4">
                                        Accountnumber
                                    </th>
                                    <th scope="col" class="px-3 py-4">
                                        Name
                                    </th>
                                    <th scope="col" class="px-3 py-4">
                                        Address
                                    </th>
                                    <th scope="col" class="px-3 py-4">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(complaint, index) in complaints" :key="index"
                                    class="border-b border-neutral-200 dark:border-white/10">
                                    <td class="flex whitespace-nowrap px-6 py-3 gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <div
                                                    class="flex items-center space-x-2 border border-neutral-200 dark:border-white/10 rounded-full p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    >>
                                                </div>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <div
                                                    class="flex p-2 space-y-2 border-b border-neutral-200 dark:border-white/10">
                                                    <Link :href="show_complaint({ id: complaint.id }).url"
                                                        class="p-2 px-5 rounded my-auto text-white bg-green-600 m-2">
                                                        View
                                                    </Link>

                                                    <Link :href="edit_complaint({ id: complaint.id }).url"
                                                        class="p-2 px-6 rounded my-auto text-white bg-blue-500 m-2">
                                                        Edit
                                                    </Link>

                                                    <DangerButton class="p-2 rounded my-auto text-white bg-red-500 m-2"
                                                        @click="
                                                            deleteEvent(
                                                                complaint.id
                                                            )
                                                            ">
                                                        Delete
                                                    </DangerButton>
                                                </div>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <div v-if="complaint.picture" class="rounded-lg w-[200px] overflow-hidden">
                                            <img v-bind:src="complaint.picture" alt="" >
                                        </div>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ complaint.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ complaint.accountnumber }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ complaint.name }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ complaint.address }}
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        {{ complaint.description }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </SettingsLayout>
    </AppLayout>
</template>
