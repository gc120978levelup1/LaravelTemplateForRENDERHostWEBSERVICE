<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as L from "leaflet";
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

// Start of other import

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

// Refs and Variable Area
const map = ref();
const loading = ref(false);

// on page loaded
onMounted(() => {
    map.value = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.value);
});

// menu test
import {
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarItemIndicator,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarRoot,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from 'reka-ui'
const currentMenu = ref('')
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')
function handleClick() {
    // eslint-disable-next-line no-alert
    alert('hello!')
}

</script>

<template>

    <Head v-bind:title="headTitle" />
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="relative border-0 text-white bg-neutral-950 rounded-none overflow-y-auto">
            <div class="absolute top-0 h-[100%] w-full bg-neutral-150 ">
                <div class="flex flex-col w-full h-[100%]  text-white px-4 py-3 gap-2">
                    <div class="z-150 h-[35px] w-full" />
                    <div class="flex-1 z-0 w-[100%] overflow-auto">
                        <!-- Main Content Start -->
                        <div id="map" class="z-0 w-[100%] h-[100%]"></div>
                        <!-- Main Content Ended -->
                    </div>
                </div>
            </div>

            <!-- Header and Function Buttons Start -->
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
                            <!-- Menu Buttons in top left AppBar Start -->

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
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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

                            <MenubarRoot v-model="currentMenu"
                                class="flex bg-white p-[3px] rounded-lg border shadow-sm">
                                <MenubarMenu value="file">
                                    <MenubarTrigger
                                        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4">
                                        File
                                    </MenubarTrigger>
                                    <MenubarPortal>
                                        <MenubarContent
                                            class="min-w-[220px] outline-none bg-white rounded-lg p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                            align="start" :side-offset="5" :align-offset="-3">
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                New Tab
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘ T
                                                </div>
                                            </MenubarItem>
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                New Window
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘ N
                                                </div>
                                            </MenubarItem>
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                                disabled>
                                                New Incognito Window
                                            </MenubarItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarSub>
                                                <MenubarSubTrigger
                                                    class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                    Share
                                                    <div
                                                        class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                        <Icon icon="radix-icons:chevron-right" />
                                                    </div>
                                                </MenubarSubTrigger>
                                                <MenubarPortal>
                                                    <MenubarSubContent
                                                        class="min-w-[220px] outline-none bg-white rounded-md p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                                        :align-offset="-5">
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Email Link
                                                        </MenubarItem>
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Messages
                                                        </MenubarItem>
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Notes
                                                        </MenubarItem>
                                                    </MenubarSubContent>
                                                </MenubarPortal>
                                            </MenubarSub>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Print…
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘ P
                                                </div>
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarPortal>
                                </MenubarMenu>

                                <MenubarMenu value="Edit">
                                    <MenubarTrigger
                                        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4">
                                        Edit
                                    </MenubarTrigger>
                                    <MenubarPortal>
                                        <MenubarContent
                                            class="min-w-[220px] outline-none bg-white rounded-md p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                            align="start" :side-offset="5" :align-offset="-3">
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Undo
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘ Z
                                                </div>
                                            </MenubarItem>
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Redo
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⇧ ⌘ Z
                                                </div>
                                            </MenubarItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarSub>
                                                <MenubarSubTrigger
                                                    class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                    Find
                                                    <div
                                                        class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                        <Icon icon="radix-icons:chevron-right" />
                                                    </div>
                                                </MenubarSubTrigger>

                                                <MenubarPortal>
                                                    <MenubarSubContent
                                                        class="min-w-[220px] outline-none bg-white rounded-md p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                                        :align-offset="-5">
                                                        <MenubarItem
                                                            class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Search the web…
                                                        </MenubarItem>
                                                        <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Find…
                                                        </MenubarItem>
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Find Next
                                                        </MenubarItem>
                                                        <MenubarItem
                                                            class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                            Find Previous
                                                        </MenubarItem>
                                                    </MenubarSubContent>
                                                </MenubarPortal>
                                            </MenubarSub>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Cut
                                            </MenubarItem>
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Copy
                                            </MenubarItem>
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Paste
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarPortal>
                                </MenubarMenu>

                                <MenubarMenu value="View">
                                    <MenubarTrigger
                                        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4">
                                        View
                                    </MenubarTrigger>
                                    <MenubarPortal>
                                        <MenubarContent
                                            class="min-w-[220px] outline-none bg-white rounded-md p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                            align="start" :side-offset="5" :align-offset="-14">
                                            <MenubarCheckboxItem v-model="checkboxOne"
                                                class="group text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1">
                                                <MenubarItemIndicator
                                                    class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                                                    <Icon icon="radix-icons:check" />
                                                </MenubarItemIndicator>
                                                Show Bookmarks
                                                <div
                                                    class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘+B
                                                </div>
                                            </MenubarCheckboxItem>
                                            <MenubarCheckboxItem v-model="checkboxTwo"
                                                class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1">
                                                <MenubarItemIndicator
                                                    class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                                                    <Icon icon="radix-icons:check" />
                                                </MenubarItemIndicator>
                                                Show Full URLs
                                            </MenubarCheckboxItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Reload
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⌘ R
                                                </div>
                                            </MenubarItem>
                                            <MenubarItem
                                                class="group text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                                disabled>
                                                Force Reload
                                                <div
                                                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                                    ⇧ ⌘ R
                                                </div>
                                            </MenubarItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Toggle Fullscreen
                                            </MenubarItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Hide Sidebar
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarPortal>
                                </MenubarMenu>

                                <MenubarMenu value="Profiles">
                                    <MenubarTrigger
                                        class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4">
                                        Profiles
                                    </MenubarTrigger>
                                    <MenubarPortal>
                                        <MenubarContent
                                            class="min-w-[220px] outline-none bg-white rounded-md p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                                            align="start" :side-offset="5" :align-offset="-14">
                                            <MenubarRadioGroup v-model="person">
                                                <MenubarRadioItem
                                                    class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                                                    value="pedro">
                                                    <MenubarItemIndicator
                                                        class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                                                        <Icon icon="radix-icons:dot-filled" />
                                                    </MenubarItemIndicator>
                                                    Pedro Duarte
                                                </MenubarRadioItem>
                                                <MenubarRadioItem
                                                    class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                                                    value="colm">
                                                    <MenubarItemIndicator
                                                        class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                                                        <Icon icon="radix-icons:dot-filled" />
                                                    </MenubarItemIndicator>
                                                    Colm Tuite
                                                </MenubarRadioItem>
                                            </MenubarRadioGroup>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                                @click="handleClick">
                                                Edit…
                                            </MenubarItem>
                                            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                                            <MenubarItem
                                                class="text-xs leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Add Profile…
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarPortal>
                                </MenubarMenu>
                            </MenubarRoot>
                            <!-- Menu Buttons in top left AppBar Ended -->

                        </div>
                    </div>
                </div>
            </div>
            <!-- Header and Function Buttons Ended -->
        </AppContent>
    </AppShell>
    <div v-show="loading" class="absolute top-0 flex w-full h-full bg-gray-950 z-6000 opacity-80 blur-2xl">
        <span class="m-auto animate-spin">
            <RefreshCw :size="250" />
        </span>
    </div>
</template>
