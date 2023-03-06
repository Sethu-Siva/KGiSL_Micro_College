function protect_email(userMail)
{
    var avg, splitted, part1, part2;
    splitted = userMail.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("sivarocks742@gmail.com"));
