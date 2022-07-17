<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        {{ $name }}
    </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="icon" href="{{ $logo['src'] }}" type="image/png">
    <style>
        .container {
            margin-top: 50px;
            width: 600px;
            height: 500px;
            background-color: #f2f2f2;
            border-radius: 10px;
            padding: 20px;
        }

        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
        }

        @media (max-width: 768px) {
            .container {
                width: 100%;
            }
        }

        .show-password {
            position: absolute;
            top: 0px;
            right: 5px;
            height: 100%;
            background: none;
            border: none;
            cursor: pointer;
            color: #3498db;
            font-size: 20px;
        }

        .relative {
            position: relative;
        }
    </style>

</head>


<body
    style="
    background-color: #f5f5f5;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
">
    <div class="container" id='container'>
        <a style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
    "
            href="{{ env('FRONTEND_URL') }}">
            <img src="{{ $logo['src'] }}" alt="{{ $logo['alt'] }}" style="display: block; height: 100%">
        </a>
        <form onsubmit="return false" id='form'>
            <input type="hidden" name="token" value="{{ $token }}" id="token">
            {{-- <div class="form-outline mb-4"> --}}
            <input type="email" class="form-control" id="email" name="email" required placeholder="Email"
                required hidden value="{{ request()->email }}">
            {{-- </div> --}}
            <div class="form-outline mb-4 relative">
                <input type="password" id="password" class="form-control" name='password' placeholder="Password"
                    required>
                <button class="show-password" onclick="togglePassword()" type="button">
                    show
                </button>
            </div>
            <div class="form-outline mb-4 relative">
                <input type="password" id="password_confirmation" class="form-control" name='password_confirmation'
                    placeholder="Confirm Password" required>
                <button class="show-password" onclick="toggleConfirmPassword()" type="button">
                    show
                </button>
            </div>
            <button type="button" onclick="handleSubmit()" class="btn btn-primary btn-block  w-100">Sign in</button>
            <div id="error" class="alert alert-danger d-none"></div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
    </script>
    <script>
        const $ = (el) => document.querySelector(el);
        const togglePassword = () => {
            const password = $('#password');
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        };
        const toggleConfirmPassword = () => {
            const password = $('#password_confirmation');
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        };
        const handleSubmit = async () => {
            const email = $('#email').value;
            const password = $('#password').value;
            const password_confirmation = $('#password_confirmation').value;
            const token = $('#token').value;
            const form = $('#form');
            const error = $('#error');
            try {
                const response = await fetch('/api/password/reset', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        password_confirmation,
                        token
                    })
                });
                const data = await response.json();
                if (response.status === 200) {
                    form.innerHTML = `
                        <div class="alert alert-success">
                            <strong>Success!</strong> ${data.message}
                        </div>
                    `;
                } else {
                    error.classList.remove('d-none');
                    error.innerHTML = data.message;
                }
            } catch (err) {
                console.log(err);
            }

        };
    </script>

</body>

</html>
