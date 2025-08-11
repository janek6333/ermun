
                
                const subtoggle = document.getElementById('subdropdown-toggle');
                const subdropdown = document.getElementById('subdropdown');

                subtoggle.addEventListener('click', () => {
                subdropdown.classList.toggle('open');
                });

                const toggle = document.getElementById('dropdown-toggle');
                const dropdown = document.getElementById('dropdown');

                toggle.addEventListener('click', () => {
                const isOpen = dropdown.classList.contains('open');
                
                // Toggle dropdown
                dropdown.classList.toggle('open');

                // If dropdown is open and gets closed, also close subdropdown
                if (isOpen) {
                        subdropdown.classList.remove('open');

                }

                
                });


                function copyLink() {
                        const link = 'ermunconference@gmail.com';
                        navigator.clipboard.writeText(link).then(() => {
                                const copiedText = document.getElementById('copiedText');
                                copiedText.style.display = 'inline';
                                setTimeout(() => {
                                copiedText.style.display = 'none';
                                }, 1500);
                        }).catch(err => {
                                alert('Failed to copy: ' + err);
                        });
                        }


