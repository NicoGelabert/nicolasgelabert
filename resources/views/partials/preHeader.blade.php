<div class="container-fluid " style="background-color:#E0E0E0">
    <div class="container" style="color:#222222">
        @if (Route::has('login'))
            <div class="py-4 pre-header">
                @auth
                    <a href="{{ url('/dashboard') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</a>
                @else
                    <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                @endauth
            </div>
        @endif
    </div>
</div>