

<script setup lang="ts">

import { Head, useForm, /*Link, usePage */} from '@inertiajs/vue3';

import { ref } from 'vue';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';

import {
    update as update_complaint,
} from '@/routes/complaint';

import type { BreadcrumbItem, /* SharedData, User*/ } from '@/types';
import SettingsLayout from './Layout.vue';

interface Props {
    complaint: object,
}

const props = defineProps<Props>();

const headTitle = "Modify Customer Complaint";
const description = "Input data change for customer complaint.";
const breadcrumbs: BreadcrumbItem[] = [{
    title: 'Edit Complaint',
    href: '/complaint/edit',
},];

//const page = usePage<SharedData>();
//const user = page.props.auth.user as User;

const form = useForm({
    id: props.complaint.id,
    accountnumber: props.complaint.accountnumber,
    name: props.complaint.name,
    address: props.complaint.address,
    complaint: props.complaint.complaint,
    description: props.complaint.description,
    picture: props.complaint.picture,
    image_file: null,
    created_at: props.complaint.created_at,
    updated_at: props.complaint.updated_at,
});

const img_url = ref(form.picture);
const encodeImageFileAsURL = (event) => {
    const files = event.target.files;
    img_url.value = URL.createObjectURL(files[0]);
    form.image_file = files[0];
}

const submit = () => {
    console.log(form);
    form.post(update_complaint({ id: form.id }).url, {
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

                    <div class="grid gap-2">
                        <Label for="name">Name</Label>
                        <Input id="name" class="mt-1 block w-full" v-model="form.name" required autocomplete="name"
                            placeholder="Full name" />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="address">Address</Label>
                        <Input id="name" class="mt-1 block w-full" v-model="form.address" required
                            autocomplete="address" placeholder="Address" />
                        <InputError class="mt-2" :message="form.errors.address" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="complaint">Complaint</Label>
                        <Input id="complaint" class="mt-1 block w-full" v-model="form.complaint" required
                            autocomplete="complaint" placeholder="complaint" />
                        <InputError class="mt-2" :message="form.errors.complaint" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="description">Description</Label>
                        <Input id="description" class="mt-1 block w-full" v-model="form.description" required
                            autocomplete="description" placeholder="Description" />
                        <InputError class="mt-2" :message="form.errors.description" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="image">Picture</Label>
                        <div v-if="img_url" class="grid gap-2">
                            <img :src="img_url" alt="" srcset="" class="border-2 rounded-lg">
                        </div>
                        <Input type="file" accept="image/*" id="image" class="mt-1 block w-full"
                            @change="encodeImageFileAsURL($event)" />
                        <InputError class="mt-2" :message="form.errors.image_file" />
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="ml-auto my-auto">
                            <Button :disabled="form.processing">Update</Button>
                            <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                                <p v-show="form.recentlySuccessful" class="text-sm text-neutral-600">Saved.</p>
                            </Transition>
                        </div>
                    </div>
                </form>
            </div>

        </SettingsLayout>
    </AppLayout>
</template>

