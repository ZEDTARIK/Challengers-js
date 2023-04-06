using System;

class MainClass
{
    public static string FirstReverse(string str)
    {
        string result = "";
        foreach (char c in str)
        {
            result = c + result;
        }
    }

    static void main() {
        Console.WriteLine(FirstReverse("Hello"));
    }
}
