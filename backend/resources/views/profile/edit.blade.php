<x-admin-layout>
    <x-slot name="title">Profile</x-slot>

    <div class="space-y-6 max-w-xl">
        <div class="p-4 sm:p-8 bg-white border border-slate-200 rounded-lg">
            @include('profile.partials.update-profile-information-form')
        </div>

        <div class="p-4 sm:p-8 bg-white border border-slate-200 rounded-lg">
            @include('profile.partials.update-password-form')
        </div>

        <div class="p-4 sm:p-8 bg-white border border-slate-200 rounded-lg">
            @include('profile.partials.delete-user-form')
        </div>
    </div>
</x-admin-layout>
