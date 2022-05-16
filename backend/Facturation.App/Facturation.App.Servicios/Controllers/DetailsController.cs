using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Facturation.App.Dominio.Models;
using Facturation.App.Persistencia.Repository;

namespace Facturation.App.Servicios.Controllers
{
    [ApiController]
    public class DetailsController : ControllerBase
    {
        private static detailRepositoryI _repoDetails = new detailRepository(new Persistencia.Repository.facturationContext());

        [Route("api/[controller]")]
        [HttpGet]
        public IEnumerable<Detail> GetAllDetails() {
            IEnumerable<Detail> details = _repoDetails.GetAllDetails();
            return details;
        }    
    }
}