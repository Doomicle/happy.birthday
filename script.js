document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.item-section');

    sections.forEach((section, index) => {
        section.addEventListener('click', () => {
            // Find the next item
            const nextItem = sections[index + 1];
            
            if (nextItem) {
                // If there's a next item in the list, scroll to it
                nextItem.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If this is the last item, go back to the first one in the list
                const firstItem = sections[0];
                firstItem.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
