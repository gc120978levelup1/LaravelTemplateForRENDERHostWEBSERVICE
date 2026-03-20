

<script setup lang="ts">
import { Head, useForm, /*usePage,*/ } from '@inertiajs/vue3';
import { ref, } from 'vue';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';

import {
    post as post_complaint
} from '@/routes/complaint';

import type { BreadcrumbItem, /*SharedData, User*/ } from '@/types';
import SettingsLayout from './Layout.vue';



interface Props {
    complaints: {type: Array,},
}

defineProps<Props>();

const headTitle = "Create New Customer Complaint";
const description = "Create a new customer complaint.";
const breadcrumbs: BreadcrumbItem[] = [{
    title: 'Create New Complaint',
    href: '/complaint/create',
},];

//const page = usePage<SharedData>();
//const user = page.props.auth.user as User;

const form = useForm({
    accountnumber:"",
    name         :"",
    address      :"",
    complaint    :"",
    description  :"",
    picture      :"xxxxx",
    image_file   :null,
});

// Register the form with into local storage
//import mem from '@/extra/gboi_memory';
//mem.register('complaint', form);

const imageURL = ref();
const onPictureChange = (event) => {
    const files = event.target.files;
    imageURL.value = URL.createObjectURL(files[0]);
    form.image_file = files[0];
};

const submit = () => {
    form.post(post_complaint().url, {
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
                        <Input id="accountnumber" class="mt-1 block w-full" v-model="form.accountnumber" required autocomplete="accountnumber"
                            placeholder="accountnumber" />
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
                        <Input id="addtrss" class="mt-1 block w-full" v-model="form.address" required autocomplete="address"
                            placeholder="Address" />
                        <InputError class="mt-2" :message="form.errors.address" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="complaint">Complaint</Label>
                        <Input id="complaint" class="mt-1 block w-full" v-model="form.complaint" required autocomplete="complaint"
                            placeholder="complaint" />
                        <InputError class="mt-2" :message="form.errors.complaint" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="description">Description</Label>
                        <Input id="description" class="mt-1 block w-full" v-model="form.description" required autocomplete="description"
                            placeholder="Description" />
                        <InputError class="mt-2" :message="form.errors.description" />
                    </div>

                    <div v-if="imageURL" class="grid gap-2">
                        <img :src="imageURL" alt="" srcset="" class="border-2 rounded-lg">
                    </div>

                    <div class="grid gap-2">
                        <Label for="picture">Picture</Label>
                        <Input type="file" accept="image/*" @change="onPictureChange" id="picture" class="mt-1 block w-full"  required autocomplete="picture"
                            placeholder="picture" />
                        <InputError class="mt-2" :message="form.errors.picture" />
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="ml-auto my-auto">
                            <Button :disabled="form.processing">Save</Button>
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

