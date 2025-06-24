import React from 'react';

import Section from './section.js';
export default function History() {
    return (
    <Section id = "history" data = "flip-right" clas = "history" heading = "History of Dumplings" image = "https://upload.wikimedia.org/wikipedia/commons/3/38/Han_Dynasty_100_BCE_%28Chinese%29.png" imgId = "img-4">
         <p><strong>Dumplings</strong>{" "} have a long and rich history, going back all the way to the Han Dynasty, where it was invented at about 200 B.C.</p>
         <p>There is a popular belief that the famous delicacy was invented by a physician who went by the name <b>Zhang Zhongjing</b>.</p>
         <p><b>The story goes like this:</b> <br/> during a harsh winter, his fellow men were getting excruciating frostbites from the cold. To combat this, he invented a dumpling prototype, which was a steaming ear-shaped dough filled with mutton and herbs.<br/> The warmth combined with the deliciousness of the food were able to nourish the men and give them energy to survive.   </p>
    </Section>
    )
}