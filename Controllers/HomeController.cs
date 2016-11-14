// The MIT License (MIT)
// Copyright (c) <year> <copyright holders>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// <CreationDate>13-11-2016</CreationDate>
namespace Angular2Playground.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// The <c>HomeController</c>
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.Controller" />
    public class HomeController : Controller
    {
        private const string MAIN_INDEX_VIEW_NAME = "Views/Home/Index.cshtml";
        private const string WELCOME_VIEW_NAME = "Views/Home/Welcome.cshtml";

        /// <summary>
        /// Function will return 'Index' View
        /// </summary>
        /// <returns>Main page that will bring all the Angular2 staff</returns>
        public ViewResult Index() => new ViewResult();


        /// <summary>
        /// Function will return 'welcome' partial page
        /// </summary>
        /// <returns>'Welcome' partial page</returns>
        public PartialViewResult WelcomePage() => new PartialViewResult { ViewName = WELCOME_VIEW_NAME };
    }
}
