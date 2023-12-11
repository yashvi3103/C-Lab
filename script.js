function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-collapsed');
  }
function togglenavbar() {
    const navu = document.getElementById('navu');
    navu.classList.toggle('snavu-collapsed');
  }
function rotate() {
  const image  = document.querySelector('body');
  image.classList.toggle('rotate')
}
// const dark = document.querySelector('body')
// body.addEventListener("click",()=>{
//   console.log("ok")
  // const body = document.querySelector('body');
  // body.classList.toggle('dark-mode');
// })
      function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }

  function hcf(){
    form.b.value =`#include<stdio.h>\nint main()\n{\n   int num1,num2,hcf;\n   scanf("%d",&num1);\n   scanf("%d",&num2);\n   int min = (num1<num2)?num1:num2;\n   for(int i = 1; i <= min; i++){\n      if(num1%i==0 && num2%i==0){\n         hcf=i;\n      }\n   }\n   printf("HCF of %d and %d is %d",num1,num2,hcf);\n   return 0;\n}`;    
}
function value_swap(){
  form.b.value = `#include <stdio.h>\nint swap(){\n    int a,b,t,c;\n    a=2;\n    b=3;\n    c=4;\n    printf("%d %d %d`+"\\n"+`",a,b,c);\n    t=a;\n    a=b;\n    b=c;\n    c=t;\n    prinf("%d %d %d",a,b,c);\n}\nint main()\n{\n    swap();\n    return 0;\n}\n`
}
function reverse(){
  form.b.value = `#include<stdio.h>\nint main()\n{\n    int num,rev = 0;\n    printf("Enter a number`+"\\n"+`");\n    scanf("%d",&num);\n    while(num != 0)\n    {\n        rev = rev * 10;\n        rev = rev + num % 10;\n        num = num/10;\n    }\n    printf("The reverse is %d",rev);\n    return 0;\n}\n`
}
function vowel_consonent_detector(){
  form.b.value = `#include<stdio.h>\nint main()\n{\n    char ch;\n    printf("Enter an alphabet\n");\n    scanf("%c",&ch);\n    switch(ch)\n    {\n        case 'a':\n            printf("You have entered a vowel");\n            break;\n        case 'e':\n            printf("You have entered a vowel");\n            break;\n        case 'i':\n            printf("You have entered a vowel");\n            break;\n        case 'o':\n            printf("You have entered a vowel");\n            break; \n        case 'u':\n            printf("You have entered a vowel");\n            break; \n         case 'A':\n            printf("You have entered a vowel");\n            break;\n        case 'E':\n            printf("You have entered a vowel");\n            break;\n        case 'I':\n            printf("You have entered a vowel");\n            break;\n        case 'O':\n            printf("You have entered a vowel");\n            break; \n        case 'U':\n            printf("You have entered a vowel");\n            break;   \n        default:\n            printf("You have entered a consonent");\n            break;\n    }\n    return 0;\n}\n`
}
function prime_number(){
  form.b.value = `#include<stdio.h>\nint prime(int n){\n    int num;\n    if (n == 0 || n ==1 || n==2 || n==3){\n        return 0;\n    }\n    for (int i = 2; i <=n/2 ; i++){\n        if (n % i == 0){\n            return 1;\n            break;\n        }\n    }\n}\nint main(){\n    int n;\n    scanf("%d", &n);\n    if (prime(n)==1){\n        printf("The number is Composite");\n    }\n    else{\n        printf("The number is Prime");\n    }\n}\n`
}
function copyText() {
const textarea = document.getElementById('codearea');
textarea.select();
document.execCommand('copy');
alert('Copied to clipboard!');
}
 