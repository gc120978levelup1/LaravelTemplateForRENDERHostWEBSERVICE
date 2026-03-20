<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Head, /*Link, useForm,*/ /* usePage */ } from '@inertiajs/vue3';
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { LocateFixed, UtilityPole, Gauge, FileClock, Search, RefreshCw } from 'lucide-vue-next';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import complaint from '@/routes/complaint';
import type { BreadcrumbItem as bc } from '@/types';

const checked = ref('true');
const breadcrumbs: bc[] = [
    {
        title: 'Complaint',
        href: complaint.index().url,
    },
    {
        title: 'Complaint',
        href: complaint.index().url,
    },
    {
        title: 'Complaint',
        href: complaint.index().url,
    },
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
const headTitle = 'Dashboard';

// on page loaded
onMounted(() => {

});
</script>

<template>

    <Head v-bind:title="headTitle" />
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="relative border-0 text-white bg-neutral-950 rounded-none overflow-y-auto">
            <div class="absolute top-0 h-screen w-full bg-neutral-150 ">
                <div class=" w-full">
                    <div id="map" class="w-full h-screen  text-white px-2 py-3 gap-2">
                        <div class="z-150 h-10 w-full" />

                        <!-- Main Content Start -->
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Hoy</span>
                            <Input class="w-60"></Input>
                            <div class="flex items-center justify-between" tabindex="3">
                                <Label for="remember" class="flex items-center space-x-3">
                                    <Checkbox id="remember" v-model:checked="checked" tabindex="4" />
                                    <span>Remember me</span>
                                </Label>
                            </div>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Name</span>
                            <Input class="w-60"></Input>
                        </div>
                        <div class="flex gap-2 m-2">
                            <span class="my-auto">Address</span>
                            <Input class="w-60"></Input>
                            <Button class="w-20 h-7 my-auto">Save</Button>
                        </div>
                        <!-- Main Content Ended -->

                    </div>
                </div>
            </div>

            <!-- Header Start -->
            <div class="absolute top-0 flex w-full h-12 px-4 overflow-hidden bottom-2 bg-gray-950">
                <div class="flex h-12 shrink-0 items-center gap-2 w-[100%]">
                    <div class="flex items-center gap-2 w-[100%]">

                        <SidebarTrigger class="-ml-1 text-white" />

                        <template v-if="breadcrumbs.length > 0">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <template v-for="(item, index) in breadcrumbs" :key="index">
                                        <BreadcrumbItem>
                                            <template v-if="index === breadcrumbs.length - 1">
                                                <BreadcrumbPage>{{ item.title }}</BreadcrumbPage>
                                            </template>
                                            <template v-else>
                                                <BreadcrumbLink :href="item.href">
                                                    {{ item.title }}
                                                </BreadcrumbLink>
                                            </template>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
                                    </template>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </template>

                        <!--  Additional Local Menu/Function Buttons-->
                        <div class="flex gap-2 ml-auto">
                            <!-- Menu Buttons in top lef AppBar Start -->

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="whereAmILocatedClick()">
                                            <LocateFixed />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            where Am I?
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="checkoutThisPlace()">
                                            <UtilityPole />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Check out this Place ...
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="showAllCustomersHere()">
                                            <Gauge />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Customers
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <!-- Dialog Start -->
                                        <Dialog>
                                            <DialogTrigger as-child>
                                                <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800">
                                                    <FileClock />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Search History
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Lists of past searches ...
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <!------------------------ BODY STARTS ----------------------------->
                                                <div
                                                    class="w-[100%] max-h-[300px] overflow-auto grid grid-flow-row-dense grid-cols-4 gap-2">

                                                    <div v-for="(searchkey) in searchList" :key="searchkey.id">
                                                        <div class="p-0 border bg-light rounded">
                                                            <DialogClose as-child>
                                                                <Button @click="searchkeyClick(searchkey.string_value)"
                                                                    class="bg-gray-900 text-blue-200 hover:bg-gray-800 flex-col p-3">
                                                                    <p><b>{{ searchkey.string_value }}</b></p>
                                                                    <span style="font-size: 10px;">
                                                                        {{ searchkey.data }}
                                                                    </span>
                                                                </Button>
                                                            </DialogClose>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!------------------------- BODY ENDS ----------------------------->
                                                <DialogFooter>
                                                    <Input class=" shadow-red-800" v-show="showConfirmDelete"
                                                        v-model="deleteAll"
                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                    <Button variant="destructive" @click="confirmClearClick()">
                                                        Clear All
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <!-- Dialog Ended -->
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-700 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Search history
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <div class="flex ml-2">
                                <Button class=" rounded-2xl rounded-r-none bg-gray-900 text-blue-200 hover:bg-gray-800"
                                    @click="customerSearch()">
                                    <Search />
                                </Button>
                                <Input class=" rounded-l-none" placeholder="Search" />
                            </div>
                            <!-- Menu Buttons in top lef AppBar Ended -->

                        </div>
                    </div>
                </div>
            </div>

        </AppContent>
    </AppShell>
</template>
