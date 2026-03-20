
<script setup lang="ts">
import { Link, /*usePage*/ } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import {
    index as index_complaint,
    create as create_complaint
} from '@/routes/complaint';

import type { NavItem } from '@/types';

const modelName = "Customer Complaints Page";
const description = "This is the model for customer complaints. You can view, create, update, and delete complaints.";
const sidebarNavItems: NavItem[] = [
    {
        title: 'Complaint Index',
        href: index_complaint().url,
    },
    {
        title: 'Create New',
        href: create_complaint().url,
    },

];

//const page = usePage();

//const currentPath = page.props.ziggy?.location ? new URL(page.props.ziggy.location).pathname : '';
</script>

<template>
    <div class="px-4 py-6">
        <Heading v-bind:title="modelName" v-bind:description="description" />
        <div class="flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside class="w-full max-w-xl lg:w-48">
                <nav class="flex flex-col space-x-0 space-y-1">
                    <Button
                        v-for="item in sidebarNavItems"
                        :key="item.href"
                        variant="ghost"
                        :class="['w-full justify-start', { 'bg-muted': currentPath === item.href }]"
                        as-child
                    >
                        <Link :href="item.href">
                            {{ item.title }}
                        </Link>
                    </Button>
                </nav>
            </aside>

            <Separator class="my-6 md:hidden" />

            <div class="flex-1 md:max-w-2xl">
                <section class="max-w-xl space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>

