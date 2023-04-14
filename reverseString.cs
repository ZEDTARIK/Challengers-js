using System;

class MainClass
{
   /// <summary>
   /// The function reverses a given string by iterating through each character and concatenating it to
   /// the beginning of a new string.
   /// </summary>
   /// <param name="str">The input string that needs to be reversed.</param>
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
