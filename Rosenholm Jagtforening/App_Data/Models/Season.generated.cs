//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.4.0
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Prey</summary>
	[PublishedContentModel("season")]
	public partial class Season : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "season";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Season(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Season, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Date end
		///</summary>
		[ImplementPropertyType("dateEnd")]
		public DateTime DateEnd
		{
			get { return this.GetPropertyValue<DateTime>("dateEnd"); }
		}

		///<summary>
		/// Date start
		///</summary>
		[ImplementPropertyType("dateStart")]
		public DateTime DateStart
		{
			get { return this.GetPropertyValue<DateTime>("dateStart"); }
		}

		///<summary>
		/// Name
		///</summary>
		[ImplementPropertyType("preyName")]
		public string PreyName
		{
			get { return this.GetPropertyValue<string>("preyName"); }
		}
	}
}