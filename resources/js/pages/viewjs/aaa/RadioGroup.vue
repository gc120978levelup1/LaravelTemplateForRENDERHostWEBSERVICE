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

// on page loaded
onMounted(() => {
});

//radio button import and refs
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui';
const radioStateSingle = ref('default');

// switch import and refs
import { SwitchRoot, SwitchThumb } from 'reka-ui';
const switchState = ref(false);

// calendar selector import and refs
import type { DateValue } from '@internationalized/date'
import { CalendarDate } from '@internationalized/date'
import {
    CalendarCell,
    CalendarCellTrigger,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHead,
    CalendarGridRow,
    CalendarHeadCell,
    CalendarHeader,
    CalendarHeading,
    CalendarNext,
    CalendarPrev,
    CalendarRoot,
    MonthPickerCell,
    MonthPickerCellTrigger,
    MonthPickerGrid,
    MonthPickerGridBody,
    MonthPickerGridRow,
    MonthPickerHeader,
    MonthPickerHeading,
    MonthPickerNext,
    MonthPickerPrev,
    MonthPickerRoot,
    YearPickerCell,
    YearPickerCellTrigger,
    YearPickerGrid,
    YearPickerGridBody,
    YearPickerGridRow,
    YearPickerHeader,
    YearPickerHeading,
    YearPickerNext,
    YearPickerPrev,
    YearPickerRoot,
} from 'reka-ui'
import { computed, nextTick, ref, watch } from 'vue'

type View = 'day' | 'month' | 'year'

const view = ref<View>('day');
const selectedDate = ref<DateValue>(new CalendarDate(2024, 10, 3));
const placeholder = ref<DateValue>(new CalendarDate(2024, 10, 1));
const containerRef = ref<HTMLElement | null>(null)

function openMonthView() {
    view.value = 'month'
}

function openYearView() {
    view.value = 'year'
}

function onMonthSelect(month: DateValue) {
    placeholder.value = month
    view.value = 'day'
}

function onYearSelect(year: DateValue) {
    placeholder.value = year
    view.value = 'month'
}

watch(selectedDate, (val) => {
    if (val)
        placeholder.value = val
})

function focusFirstCell(nextView: View) {
    const root = containerRef.value
    if (!root)
        return

    const selector = nextView === 'day'
        ? '[data-reka-calendar-cell-trigger]'
        : nextView === 'month'
            ? '[data-reka-month-picker-cell-trigger]'
            : '[data-reka-year-picker-cell-trigger]'

    const focused = root.querySelector<HTMLElement>(`${selector}[data-focused]`)
    const first = root.querySelector<HTMLElement>(`${selector}:not([data-disabled]):not([data-unavailable])`)
        ; (focused || first)?.focus()
}

watch(view, async (nextView) => {
    await nextTick()
    focusFirstCell(nextView)
})

const monthLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const monthLabel = computed(() => monthLabels[placeholder.value.month - 1])
const yearLabel = computed(() => String(placeholder.value.year))

const navButtonClass = 'inline-flex items-center cursor-default text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-100 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-green10 disabled:opacity-50'
const headingGroupClass = 'flex items-center gap-2'
const monthButtonClass = 'rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide text-black transition-colors cursor-default focus-visible:outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-green10'
const yearButtonClass = 'rounded-md px-2 py-1 text-sm font-medium text-black transition-colors cursor-default focus-visible:outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-green10'
const cellTriggerBase = 'relative flex items-center justify-center rounded-md whitespace-nowrap text-sm font-normal text-black outline-none cursor-default focus:shadow-[0_0_0_2px] focus:shadow-green10 hover:bg-green-100 data-[selected]:!bg-green-600 data-[selected]:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-30 data-[unavailable]:pointer-events-none data-[unavailable]:line-through data-[today]:font-semibold'

// combobox
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport } from 'reka-ui'
const options = [
    {
        name: 'Fruit', children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Orange' },
            { name: 'Honeydew' },
            { name: 'Grapes' },
            { name: 'Watermelon' },
            { name: 'Cantaloupe' },
            { name: 'Pear' },
        ]
    },
    {
        name: 'Vegetable', children: [
            { name: 'Cabbage' },
            { name: 'Broccoli' },
            { name: 'Carrots' },
            { name: 'Lettuce' },
            { name: 'Spinach' },
            { name: 'Bok Choy' },
            { name: 'Cauliflower' },
            { name: 'Potatoes' },
        ]
    },
];

// date picker
import {
    DatePickerArrow,
    DatePickerCalendar,
    DatePickerCell,
    DatePickerCellTrigger,
    DatePickerContent,
    DatePickerField,
    DatePickerGrid,
    DatePickerGridBody,
    DatePickerGridHead,
    DatePickerGridRow,
    DatePickerHeadCell,
    DatePickerHeader,
    DatePickerHeading,
    DatePickerInput,
    DatePickerNext,
    DatePickerPrev,
    DatePickerRoot,
    DatePickerTrigger,
    Label,
} from 'reka-ui';
const date_value = ref<DateValue>(new CalendarDate(2024, 10, 3));

// Dialog
import {
    DialogOverlay,
    DialogPortal,
} from 'reka-ui';
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

                        <br />

                        <RadioGroupRoot v-model="radioStateSingle" class="flex flex-col gap-2.5" default-value="default"
                            aria-label="View density">
                            <div class="flex items-center">
                                <RadioGroupItem id="r1"
                                    class="bg-white w-[1.125rem] h-[1.125rem] rounded-full border data-[active=true]:border-stone-700 data-[active=true]:bg-stone-700 dark:data-[active=true]:bg-white shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-stone-700 outline-none cursor-default"
                                    value="default">
                                    <RadioGroupIndicator
                                        class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-white dark:after:bg-stone-700" />
                                </RadioGroupItem>
                                <label class="text-stone-700 dark:text-white text-sm leading-none pl-[15px]" for="r1">
                                    Default
                                </label>
                            </div>
                            <div class="flex items-center">
                                <RadioGroupItem id="r2"
                                    class="bg-white w-[1.125rem] h-[1.125rem] rounded-full border data-[active=true]:border-stone-700 data-[active=true]:bg-stone-700 dark:data-[active=true]:bg-white shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-stone-700 outline-none cursor-default"
                                    value="comfortable">
                                    <RadioGroupIndicator
                                        class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-white dark:after:bg-stone-700" />
                                </RadioGroupItem>
                                <label class="text-stone-700 dark:text-white text-sm leading-none pl-[15px]" for="r2">
                                    Comfortable
                                </label>
                            </div>
                            <div class="flex items-center">
                                <RadioGroupItem id="r3"
                                    class="bg-white w-[1.125rem] h-[1.125rem] rounded-full border data-[active=true]:border-stone-700 data-[active=true]:bg-stone-700 dark:data-[active=true]:bg-white shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-stone-700 outline-none cursor-default"
                                    value="compact">
                                    <RadioGroupIndicator
                                        class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-white dark:after:bg-stone-700" />
                                </RadioGroupItem>
                                <label class="text-stone-700 dark:text-white text-sm leading-none pl-[15px]" for="r3">
                                    Compact
                                </label>
                            </div>
                        </RadioGroupRoot>

                        <br />

                        <div class="flex gap-2 items-center">
                            <label class="text-stone-700 dark:text-white text-sm leading-none pr-2 select-none"
                                for="airplane-mode">
                                Airplane mode
                            </label>
                            <SwitchRoot id="airplane-mode" v-model="switchState"
                                class="w-[32px] h-[20px] shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800">
                                <SwitchThumb
                                    class="w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full" />
                            </SwitchRoot>
                        </div>

                        <br />

                        <ComboboxRoot class="relative">
                            <ComboboxAnchor
                                class="min-w-[160px] inline-flex items-center justify-between rounded-lg border px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 hover:bg-stone-50 shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
                                <ComboboxInput
                                    class="!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-stone-400"
                                    placeholder="Placeholder..." />
                                <ComboboxTrigger>
                                    <Icon icon="radix-icons:chevron-down" class="h-4 w-4 text-grass11" />
                                </ComboboxTrigger>
                            </ComboboxAnchor>

                            <ComboboxContent
                                class="absolute z-10 w-full mt-1 min-w-[160px] bg-white overflow-hidden rounded-lg shadow-sm border will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
                                <ComboboxViewport class="p-[5px]">
                                    <ComboboxEmpty class="text-mauve8 text-xs font-medium text-center py-2" />

                                    <template v-for="(group, index) in options" :key="group.name">
                                        <ComboboxGroup>
                                            <ComboboxSeparator v-if="index !== 0" class="h-[1px] bg-grass6 m-[5px]" />

                                            <ComboboxLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                                                {{ group.name }}
                                            </ComboboxLabel>

                                            <ComboboxItem v-for="option in group.children" :key="option.name"
                                                :value="option.name"
                                                class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1">
                                                <ComboboxItemIndicator
                                                    class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                                    <Icon icon="radix-icons:check" />
                                                </ComboboxItemIndicator>
                                                <span>
                                                    {{ option.name }}
                                                </span>
                                            </ComboboxItem>
                                        </ComboboxGroup>
                                    </template>
                                </ComboboxViewport>
                            </ComboboxContent>
                        </ComboboxRoot>

                        <br>

                        <div ref="containerRef" class="rounded-xl bg-white p-4 shadow-sm border w-[280px]">
                            <!-- Day View (Calendar) -->
                            <CalendarRoot v-if="view === 'day'" v-slot="{ weekDays, grid }" v-model="selectedDate"
                                v-model:placeholder="placeholder" class="flex flex-col" fixed-weeks>
                                <CalendarHeader class="flex items-center justify-between mb-4">
                                    <CalendarPrev :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-left" class="w-4 h-4" />
                                    </CalendarPrev>
                                    <CalendarHeading :class="headingGroupClass">
                                        <button type="button" :class="[
                                            monthButtonClass,
                                            view !== 'month' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'month'" aria-label="Select month view"
                                            @click="openMonthView">
                                            {{ monthLabel }}
                                        </button>
                                        <button type="button" :class="[
                                            yearButtonClass,
                                            view !== 'year' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'year'" aria-label="Select year view"
                                            @click="openYearView">
                                            {{ yearLabel }}
                                        </button>
                                    </CalendarHeading>
                                    <CalendarNext :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-right" class="w-4 h-4" />
                                    </CalendarNext>
                                </CalendarHeader>

                                <CalendarGrid v-for="month in grid" :key="month.value.toString()"
                                    class="w-full border-collapse select-none space-y-1">
                                    <CalendarGridHead>
                                        <CalendarGridRow class="mb-1 grid w-full grid-cols-7">
                                            <CalendarHeadCell v-for="day in weekDays" :key="day"
                                                class="rounded-md text-xs text-stone-500 text-center">
                                                {{ day }}
                                            </CalendarHeadCell>
                                        </CalendarGridRow>
                                    </CalendarGridHead>
                                    <CalendarGridBody class="grid">
                                        <CalendarGridRow v-for="(weekDates, index) in month.rows"
                                            :key="`weekDate-${index}`" class="grid grid-cols-7">
                                            <CalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()"
                                                :date="weekDate" class="relative text-center text-sm">
                                                <CalendarCellTrigger :day="weekDate" :month="month.value"
                                                    class="w-8 h-8 rounded-full data-[outside-view]:text-black/30"
                                                    :class="[cellTriggerBase]" />
                                            </CalendarCell>
                                        </CalendarGridRow>
                                    </CalendarGridBody>
                                </CalendarGrid>
                            </CalendarRoot>

                            <!-- Month View (MonthPicker) -->
                            <MonthPickerRoot v-else-if="view === 'month'" v-slot="{ grid }"
                                v-model:placeholder="placeholder" class="flex flex-col"
                                @update:model-value="onMonthSelect">
                                <MonthPickerHeader class="flex items-center justify-between mb-4">
                                    <MonthPickerPrev :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-left" class="w-4 h-4" />
                                    </MonthPickerPrev>
                                    <MonthPickerHeading :class="headingGroupClass">
                                        <button type="button" :class="[
                                            monthButtonClass,
                                            view !== 'month' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'month'" aria-label="Select month view"
                                            @click="openMonthView">
                                            {{ monthLabel }}
                                        </button>
                                        <button type="button" :class="[
                                            yearButtonClass,
                                            view !== 'year' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'year'" aria-label="Select year view"
                                            @click="openYearView">
                                            {{ yearLabel }}
                                        </button>
                                    </MonthPickerHeading>
                                    <MonthPickerNext :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-right" class="w-4 h-4" />
                                    </MonthPickerNext>
                                </MonthPickerHeader>

                                <MonthPickerGrid class="w-full">
                                    <MonthPickerGridBody>
                                        <MonthPickerGridRow v-for="(monthRow, rowIndex) in grid.rows"
                                            :key="`monthRow-${rowIndex}`" class="grid grid-cols-4 gap-1">
                                            <MonthPickerCell v-for="month in monthRow" :key="month.toString()"
                                                :date="month">
                                                <MonthPickerCellTrigger :month="month" class="w-full py-2"
                                                    :class="[cellTriggerBase]" />
                                            </MonthPickerCell>
                                        </MonthPickerGridRow>
                                    </MonthPickerGridBody>
                                </MonthPickerGrid>
                            </MonthPickerRoot>

                            <!-- Year View (YearPicker) -->
                            <YearPickerRoot v-else v-slot="{ grid }" v-model:placeholder="placeholder"
                                class="flex flex-col" @update:model-value="onYearSelect">
                                <YearPickerHeader class="flex items-center justify-between mb-4">
                                    <YearPickerPrev :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-left" class="w-4 h-4" />
                                    </YearPickerPrev>
                                    <YearPickerHeading :class="headingGroupClass">
                                        <button type="button" :class="[
                                            monthButtonClass,
                                            view !== 'month' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'month'" aria-label="Select month view"
                                            @click="openMonthView">
                                            {{ monthLabel }}
                                        </button>
                                        <button type="button" :class="[
                                            yearButtonClass,
                                            view !== 'year' && 'hover:bg-stone-100',
                                        ]" :aria-pressed="view === 'year'" aria-label="Select year view"
                                            @click="openYearView">
                                            {{ yearLabel }}
                                        </button>
                                    </YearPickerHeading>
                                    <YearPickerNext :class="navButtonClass">
                                        <Icon icon="radix-icons:chevron-right" class="w-4 h-4" />
                                    </YearPickerNext>
                                </YearPickerHeader>

                                <YearPickerGrid class="w-full">
                                    <YearPickerGridBody>
                                        <YearPickerGridRow v-for="(yearRow, rowIndex) in grid.rows"
                                            :key="`yearRow-${rowIndex}`" class="grid grid-cols-4 gap-1">
                                            <YearPickerCell v-for="year in yearRow" :key="year.toString()" :date="year">
                                                <YearPickerCellTrigger :year="year" class="w-full py-2"
                                                    :class="[cellTriggerBase]" />
                                            </YearPickerCell>
                                        </YearPickerGridRow>
                                    </YearPickerGridBody>
                                </YearPickerGrid>
                            </YearPickerRoot>
                        </div>


                        <br>


                        <div class="flex flex-col gap-2">
                            <Label class="text-sm text-stone-700 dark:text-white" for="birthday">
                                Birthday
                            </Label>
                            <DatePickerRoot id="birthday" :is-date-unavailable="date => date.day === 19"
                                v-model="date_value">
                                <DatePickerField v-slot="{ segments }"
                                    class="w-36 flex select-none bg-white items-center rounded-lg shadow-sm text-center justify-between text-green10 border p-1 data-[invalid]:border-red-500">
                                    <div class="flex items-center">
                                        <template v-for="item in segments" :key="item.part">
                                            <DatePickerInput v-if="item.part === 'literal'" :part="item.part">
                                                {{ item.value }}
                                            </DatePickerInput>
                                            <DatePickerInput v-else :part="item.part"
                                                class="rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9">
                                                {{ item.value }}
                                            </DatePickerInput>
                                        </template>
                                    </div>

                                    <DatePickerTrigger class="focus:shadow-[0_0_0_2px] rounded p-1 focus:shadow-black">
                                        <Icon icon="radix-icons:calendar" class="text-base" />
                                    </DatePickerTrigger>
                                </DatePickerField>

                                <DatePickerContent :side-offset="4"
                                    class="rounded-xl bg-white border shadow-sm will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade">
                                    <DatePickerArrow class="fill-white stroke-gray-300" />
                                    <DatePickerCalendar v-slot="{ weekDays, grid }" class="p-4">
                                        <DatePickerHeader class="flex items-center justify-between">
                                            <DatePickerPrev
                                                class="inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                <Icon icon="radix-icons:chevron-left" class="w-4 h-4" />
                                            </DatePickerPrev>

                                            <DatePickerHeading class="text-black font-medium" />
                                            <DatePickerNext
                                                class="inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                <Icon icon="radix-icons:chevron-right" class="w-4 h-4" />
                                            </DatePickerNext>
                                        </DatePickerHeader>
                                        <div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                            <DatePickerGrid v-for="month in grid" :key="month.value.toString()"
                                                class="w-full border-collapse select-none space-y-1">
                                                <DatePickerGridHead>
                                                    <DatePickerGridRow class="mb-1 flex w-full justify-between">
                                                        <DatePickerHeadCell v-for="day in weekDays" :key="day"
                                                            class="w-8 rounded-md text-xs text-green8">
                                                            {{ day }}
                                                        </DatePickerHeadCell>
                                                    </DatePickerGridRow>
                                                </DatePickerGridHead>
                                                <DatePickerGridBody>
                                                    <DatePickerGridRow v-for="(weekDates, index) in month.rows"
                                                        :key="`weekDate-${index}`" class="flex w-full">
                                                        <DatePickerCell v-for="weekDate in weekDates"
                                                            :key="weekDate.toString()" :date="weekDate">
                                                            <DatePickerCellTrigger :day="weekDate" :month="month.value"
                                                                class="relative flex items-center justify-center whitespace-nowrap rounded-[9px] border border-transparent bg-transparent text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-black data-[selected]:bg-black data-[selected]:font-medium data-[outside-view]:text-black/30 data-[selected]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[selected]:before:bg-white" />
                                                        </DatePickerCell>
                                                    </DatePickerGridRow>
                                                </DatePickerGridBody>
                                            </DatePickerGrid>
                                        </div>
                                    </DatePickerCalendar>
                                </DatePickerContent>
                            </DatePickerRoot>
                        </div>

                        <br>





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
            <!-- Header Ended -->
        </AppContent>
    </AppShell>
</template>
